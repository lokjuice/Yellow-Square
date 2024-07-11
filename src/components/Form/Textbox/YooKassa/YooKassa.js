import axios from 'axios';
import { useSelector } from 'react-redux';
import { createMessage } from '/src/utils/createMessage';
import classes from './YooKassa.module.css';
import { getBuyInfo } from '/src/utils/getBuyInfo';

export const YooKassa = () => {
  const contacts = useSelector((store) => store?.logoBreef?.contacts);
  const count = useSelector((store) => store?.logoBreef?.count);

  const [amount, description] = getBuyInfo(Number(count) || 1);

  const disabled = contacts.email === '';

	const store = useSelector(store => store?.logoBreef);

	const sendPhotos = (file) => {
		const token ="XXXXXXXXXXXXX";
		const urlSendPhoto = `https://api.telegram.org/bot${token}/sendPhoto`;
		const chatId = "-1001722127371";

		const formData = new FormData();
		formData.append('chat_id', chatId);
		formData.append('photo', file);

		axios.post(urlSendPhoto, formData, {
			headers: {
				'Content-Type': 'multipart/form-data',
			}
		}).catch((e) => {
			console.log(e);
		});
	}

  async function telegramRequest() {
    const token ="5821946442:AAG5R-UNDP1E910tEleFVKHTO-RI2Rl6OeQ";
    const chatId = "-1001722127371";
    const urlSendMessage = `https://api.telegram.org/bot${token}/sendMessage`;
  
    const message = createMessage(store);
  
    await axios.post(urlSendMessage, {
      chat_id: chatId,
      parse_mode: 'html',
      text: message,
    }).then(() => {
      const filesArray = new Array(...store?.files);
      
      filesArray.map((file) => sendPhotos(file));
    });
    
    const form = document?.getElementById('formSubmitId');
  
    form.action = "https://yookassa.ru/integration/simplepay/payment";
    form.method = "POST";
    form.submit();
  }

	const handleBuy = (e) => {
    e.preventDefault();
    telegramRequest();
  }

  return (
    <>
    <link
        rel="stylesheet"
        href="https://yookassa.ru/integration/simplepay/css/yookassa_construct_form.css"
      />
      <form
        id="formSubmitId"
        acceptCharset="utf-8"
      >
      <div>
        <div>
          <input
            type="hidden"
            id="receiptID"
            name="ym_merchant_receipt"
            onChange={() => {}}
            value={`{ "customer":{ "email": "${contacts.email}" }, "items":[{ "text": "${description}", "quantity": "1", "price":{ "amount": "${amount}" }, "paymentSubjectType": "commodity", "paymentMethodType": "full_prepayment", "tax": "1" }] }`}
          />
        </div>

          <textarea
            className="ym-textarea ym-display-none"
            name="orderDetails"
            placeholder="Комментарий"
            value={description}
            onChange={() => {}}
            />
        </div>
        <div>
          <div className="ym-input-icon-rub ym-display-none">
            <input
              name="sum"
              placeholder="0.00"
              className="ym-input ym-sum-input ym-required-input"
              type="number"
              step="any"
              value={amount}
              onChange={() => {}}
            />
          </div>
          <button
            data-text="Заплатить"
            disabled={disabled}
            className={disabled ? classes.blocked : classes.block}
            onClick={(e) => handleBuy(e)}
          >
            Оплатить {amount} ₽
          </button>
        </div>
        <input
          name="shopId"
          type="hidden"
          value="977159"
        />
      </form>
    </>
  );
}

export default YooKassa;


