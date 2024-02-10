const nodemailer = require("nodemailer");

export default async function handler(req, res) {
  if (req.method === "POST") {
    let transporter = await nodemailer.createTransport({
      host: "smtp.titan.email",
      port: 465,
      secure: true,
      auth: {
        user: "support@volumeoptions.com",
        pass: "Volume@3456",
      },
    });

    await transporter.sendMail({
      from: "support@volumeoptions.com",
      to: req.body.email,
      subject: `[Volume Options] Volume Staking in Progress [${new Date()}]`,
      html: `
            <!DOCTYPE HTML PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
<head>
<!--[if gte mso 9]>
<xml>
<o:OfficeDocumentSettings>
<o:AllowPNG/>
<o:PixelsPerInch>96</o:PixelsPerInch>
</o:OfficeDocumentSettings>
</xml>
<![endif]-->
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="x-apple-disable-message-reformatting">
<!--[if !mso]><!--><meta http-equiv="X-UA-Compatible" content="IE=edge"><!--<![endif]-->
<title></title>
<style type="text/css">
@media only screen and (min-width: 120px) {
.u-row {
width: 100px !important;
}
.u-row .u-col {
vertical-align: top;
}

.u-row .u-col-100 {
width: 100px !important;
}

}

@media (max-width: 120px) {
.u-row-container {
max-width: 100% !important;
padding-left: 0px !important;
padding-right: 0px !important;
}
.u-row .u-col {
min-width: 320px !important;
max-width: 100% !important;
display: block !important;
}
.u-row {
width: 100% !important;
}
.u-col {
width: 100% !important;
}
.u-col > div {
margin: 0 auto;
}
}
body {
margin: 0;
padding: 0;
}

table,
tr,
td {
vertical-align: top;
border-collapse: collapse;
}

p {
margin: 0;
}

.ie-container table,
.mso-container table {
table-layout: fixed;
}

* {
line-height: inherit;
}

a[x-apple-data-detectors='true'] {
color: inherit !important;
text-decoration: none !important;
}

table, td { color: #000000; } #u_body a { color: #0000ee; text-decoration: underline; }
</style>

</head>

<body class="clean-body u_body" style="margin: 0;padding: 0;-webkit-text-size-adjust: 100%;background-color: #e7e7e7;color: #000000">
<!--[if IE]><div class="ie-container"><![endif]-->
<!--[if mso]><div class="mso-container"><![endif]-->
<table id="u_body" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;min-width: 320px;Margin: 0 auto;background-color: #e7e7e7;width:100%" cellpadding="0" cellspacing="0">
<tbody>
<tr style="vertical-align: top">
<td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
<!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="background-color: #e7e7e7;"><![endif]-->
<div class="u-row-container" style="padding: 0px;background-color: transparent">
<div class="u-row" style="margin: 0 auto;min-width: 320px;max-width: 100px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
<div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
<!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:100px;"><tr style="background-color: transparent;"><![endif]-->
<!--[if (mso)|(IE)]><td align="center" width="100" style="width: 100px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
<div class="u-col u-col-100" style="max-width: 320px;min-width: 100px;display: table-cell;vertical-align: top;">
<div style="height: 100%;width: 100% !important;">
<!--[if (!mso)&(!IE)]><!--><div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;"><!--<![endif]-->
<table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
<tbody>
<tr>
<td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">
<table width="100%" cellpadding="0" cellspacing="0" border="0">
<tr>
<td style="padding-right: 0px;padding-left: 0px;" align="center">
<img align="center" border="0" src="https://assets.unlayer.com/projects/212940/1707058468938-B2733BBF-FA26-42AE-A4B7-716716A38D6B.png" alt="" title="" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: inline-block !important;border: none;height: auto;float: none;width: 100%;max-width: 80px;" width="80"/>
</td>
</tr>
</table>

</td>
</tr>
</tbody>
</table>

<table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
<tbody>
<tr>
<td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">
<div style="font-size: 14px; line-height: 140%; text-align: center; word-wrap: break-word;">
<div>
<div>
<div>
<div>
<div>
<div>
<p style="line-height: 140%;" data-removefontsize="true" data-originalcomputedfontsize="15">You’ve placed a staking order successfully. </p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

</td>
</tr>
</tbody>
</table>

<!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
</div>
</div>
<!--[if (mso)|(IE)]></td><![endif]-->
<!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
</div>
</div>
</div>


<div class="u-row-container" style="padding: 0px;background-color: transparent">
<div class="u-row" style="margin: 0 auto;min-width: 320px;max-width: 100px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
<div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
<!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:100px;"><tr style="background-color: transparent;"><![endif]-->
<!--[if (mso)|(IE)]><td align="center" width="100" style="background-color: #bfedd2;width: 100px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
<div class="u-col u-col-100" style="max-width: 320px;min-width: 100px;display: table-cell;vertical-align: top;">
<div style="background-color: #bfedd2;height: 100%;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
<!--[if (!mso)&(!IE)]><!--><div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;"><!--<![endif]-->
<table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
<tbody>
<tr>
<td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">
<div style="font-size: 14px; line-height: 140%; text-align: left; word-wrap: break-word;">
<h4 data-removefontsize="true" data-originalcomputedfontsize="16">Staked coin:${req.body.coin}</h4>
<h4 data-removefontsize="true" data-originalcomputedfontsize="16">Amount ($): ${req.body.amount}</h4>
<h4 data-removefontsize="true" data-originalcomputedfontsize="16">APR: ${req.body.apr}</h4>
<p style="line-height: 140%;" data-removefontsize="true" data-originalcomputedfontsize="16"><strong data-removefontsize="true" data-originalcomputedfontsize="16">Term</strong>: ${req.body.term}<br /><br /></p>
<p style="line-height: 140%;" data-removefontsize="true" data-originalcomputedfontsize="16"><strong data-removefontsize="true" data-originalcomputedfontsize="16">Subscription date: ${req.body.date}</strong></p>
<h4 data-removefontsize="true" data-originalcomputedfontsize="16">Redemption Period: ${req.body.duration}<br /><br /></h4>
</div>

</td>
</tr>
</tbody>
</table>

<!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
</div>
</div>
<!--[if (mso)|(IE)]></td><![endif]-->
<!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
</div>
</div>
</div>


<div class="u-row-container" style="padding: 0px;background-color: transparent">
<div class="u-row" style="margin: 0 auto;min-width: 320px;max-width: 100px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
<div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
<!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:100px;"><tr style="background-color: transparent;"><![endif]-->
<!--[if (mso)|(IE)]><td align="center" width="100" style="width: 100px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
<div class="u-col u-col-100" style="max-width: 320px;min-width: 100px;display: table-cell;vertical-align: top;">
<div style="height: 100%;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
<!--[if (!mso)&(!IE)]><!--><div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;"><!--<![endif]-->
<table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
<tbody>
<tr>
<td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">
<div style="font-size: 14px; line-height: 140%; text-align: center; word-wrap: break-word;">
<p style="line-height: 140%;"><strong>Risk warning:</strong> Cryptocurrency trading is subject to high market risk. volumeoptions will make the best efforts to choose high-quality coins, but will not be responsible for your trading losses. Please trade with caution.<br /><br /></p>
<p style="line-height: 140%;"> </p>
<p style="line-height: 140%;"> </p>
<p style="line-height: 140%;"><strong>Kindly note:</strong> Please be aware of phishing sites and always make sure you are visiting the official  <a href="https://www.vsaexchange.com/">https://www.volumeoptions.com</a> website when entering sensitive data.</p>
<p style="line-height: 140%;">© 2023 volumeoptions, All Rights Reserved.</p>
<p style="line-height: 140%;"><br /><br /><br /></p>
</div>

</td>
</tr>
</tbody>
</table>

<!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
</div>
</div>
<!--[if (mso)|(IE)]></td><![endif]-->
<!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
</div>
</div>
</div>



      `,
    });
  }
  res.status(200).json({ msg: "sent email" });
}
