import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import regeneratorRuntime from "regenerator-runtime";
import { createMessage } from '/src/utils/createMessage';
import classes from './YooKassa.module.css';
import { useState } from 'react';
import { useEffect } from 'react';
import { getBuyInfo } from '/src/utils/getBuyInfo';

export const YooKassa = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((store) => store?.logoBreef?.contacts);
  const count = useSelector((store) => store?.logoBreef?.count);

  const [amount, description] = getBuyInfo(Number(count) || 1);

  const disabled = contacts.email === '';

	const store = useSelector(store => store?.logoBreef);

	const sendPhotos = (file) => {
		const token ="5821946442:AAG5R-UNDP1E910tEleFVKHTO-RI2Rl6OeQ";
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

		// const token ="5821946442:AAG5R-UNDP1E910tEleFVKHTO-RI2Rl6OeQ";
		// const chatId = "-1001722127371";
		// const urlSendMessage = `https://api.telegram.org/bot${token}/sendMessage`;

		// const message = createMessage(store);

    // axios.post(urlSendMessage, {
		// 	chat_id: chatId,
		// 	parse_mode: 'html',
		// 	text: message,
		// }).then(() => {
		// 	const filesArray = new Array(...store?.files);
      
		// 	filesArray.map((file) => sendPhotos(file));
    //   // setTimeout(() => {}, 1000);
		// });

    // console.log('res  -  ', res);
    // .then(() => {
    //   const form = document?.getElementById('formSubmitId');

    //   form.action = "https://yookassa.ru/integration/simplepay/payment";
    //   form.method = "POST";
    //   form.submit();
    // }
    // );
  }

  return (
    <>
    <link
        rel="stylesheet"
        href="https://yookassa.ru/integration/simplepay/css/yookassa_construct_form.css"
      />
      <form
      id="formSubmitId"
        // action="https://yookassa.ru/integration/simplepay/payment"
        // onSubmit={() => handleBuy()}
        // method="post"
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
          {/* <input name="cps_email" id="emailCustomer" defaultValue={email === '' ? contacts.email : email} placeholder="Почта" />
          <input name="cps_phone" id="phoneCustomer" defaultValue={phone === '' ? contacts.phone : phone} placeholder="Телефон" /> */}
          
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
            // class="ym-btn-pay ym-result-price"
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


