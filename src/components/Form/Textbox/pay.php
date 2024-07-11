<?php
    use YooKassa\Client;

    $client = new Client();
    $client->setAuth('977159', 'live_iCMPFAkv_yd24iYQl5m9vHmU7SkgOP0gLUWmdomU2QI');
    $payment = $client->createPayment(
        array(
            'amount' => array(
                'value' => 1.0,
                'currency' => 'RUB',
            ),
            'confirmation' => array(
                'type' => 'redirect',
                'return_url' => 'https://www.apple.com',
            ),
            'capture' => true,
        ),
        uniqid('', true)
    );
?>