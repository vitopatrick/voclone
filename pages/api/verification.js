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
      from: "support@Volume Options.com",
      to: req.body.email,
      subject: "[Volume Options] verification successful ",
      html: `<!DOCTYPE HTML PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
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
<!--[if !mso]><!-->
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<!--<![endif]-->
<title></title>

<style type="text/css">
@media only screen and (min-width: 550px) {
.u-row {
width: 530px !important;
}
.u-row .u-col {
vertical-align: top;
}
.u-row .u-col-100 {
width: 530px !important;
}
}
@media (max-width: 550px) {
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
.u-col>div {
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
table,
td {
color: #000000;
}
#u_body a {
color: #0000ee;
text-decoration: underline;
}
</style>



<!--[if !mso]><!-->
<link href="https://fonts.googleapis.com/css?family=Cabin:400,700" rel="stylesheet" type="text/css">
<!--<![endif]-->

</head>

<body class="clean-body u_body" style="margin: 0;padding: 0;-webkit-text-size-adjust: 100%;background-color: #f9f9f9;color: #000000">
<!--[if IE]><div class="ie-container"><![endif]-->
<!--[if mso]><div class="mso-container"><![endif]-->
<table id="u_body" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;min-width: 320px;Margin: 0 auto;background-color: #f9f9f9;width:100%" cellpadding="0" cellspacing="0">
<tbody>
<tr style="vertical-align: top">
<td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
<!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="background-color: #f9f9f9;"><![endif]-->



<div class="u-row-container" style="padding: 0px;background-color: transparent">
<div class="u-row" style="margin: 0 auto;min-width: 320px;max-width: 530px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
<div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
<!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:530px;"><tr style="background-color: transparent;"><![endif]-->

<!--[if (mso)|(IE)]><td align="center" width="530" style="width: 530px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
<div class="u-col u-col-100" style="max-width: 320px;min-width: 530px;display: table-cell;vertical-align: top;">
<div style="height: 100%;width: 100% !important;">
<!--[if (!mso)&(!IE)]><!-->
<div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
<!--<![endif]-->

<table style="font-family:'Cabin',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
<tbody>
<tr>
<td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:'Cabin',sans-serif;" align="left">

<div style="font-size: 14px; color: #afb0c7; line-height: 170%; text-align: center; word-wrap: break-word;">
<p style="font-size: 14px; line-height: 170%;"><span style="font-size: 14px; line-height: 23.8px;">View Email in Browser</span></p>
</div>

</td>
</tr>
</tbody>
</table>

<!--[if (!mso)&(!IE)]><!-->
</div>
<!--<![endif]-->
</div>
</div>
<!--[if (mso)|(IE)]></td><![endif]-->
<!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
</div>
</div>
</div>





<div class="u-row-container" style="padding: 0px;background-color: transparent">
<div class="u-row" style="margin: 0 auto;min-width: 320px;max-width: 530px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #ffffff;">
<div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
<!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:530px;"><tr style="background-color: #ffffff;"><![endif]-->

<!--[if (mso)|(IE)]><td align="center" width="530" style="width: 530px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
<div class="u-col u-col-100" style="max-width: 320px;min-width: 530px;display: table-cell;vertical-align: top;">
<div style="height: 100%;width: 100% !important;">
<!--[if (!mso)&(!IE)]><!-->
<div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
<!--<![endif]-->

<table style="font-family:'Cabin',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
<tbody>
<tr>
<td style="overflow-wrap:break-word;word-break:break-word;padding:20px;font-family:'Cabin',sans-serif;" align="left">

<table width="100%" cellpadding="0" cellspacing="0" border="0">
<tr>
<td style="padding-right: 0px;padding-left: 0px;" align="center">

<img align="center" border="0" src="https://assets.unlayer.com/projects/209761/1705680395594-B2575E14-C2DB-4CFE-B8CB-71A783DFAE1E.png" alt="Image" title="Image" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: inline-block !important;border: none;height: auto;float: none;width: 32%;max-width: 156.8px;"
width="156.8" />

</td>
</tr>
</table>

</td>
</tr>
</tbody>
</table>

<!--[if (!mso)&(!IE)]><!-->
</div>
<!--<![endif]-->
</div>
</div>
<!--[if (mso)|(IE)]></td><![endif]-->
<!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
</div>
</div>
</div>





<div class="u-row-container" style="padding: 0px;background-color: transparent">
<div class="u-row" style="margin: 0 auto;min-width: 320px;max-width: 530px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #003399;">
<div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
<!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:530px;"><tr style="background-color: #003399;"><![endif]-->

<!--[if (mso)|(IE)]><td align="center" width="530" style="width: 530px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
<div class="u-col u-col-100" style="max-width: 320px;min-width: 530px;display: table-cell;vertical-align: top;">
<div style="height: 100%;width: 100% !important;">
<!--[if (!mso)&(!IE)]><!-->
<div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
<!--<![endif]-->

<table style="font-family:'Cabin',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
<tbody>
<tr>
<td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:'Cabin',sans-serif;" align="left">

<div style="font-size: 14px; color: #e5eaf5; line-height: 140%; text-align: center; word-wrap: break-word;">
<h1><strong data-removefontsize="true" data-originalcomputedfontsize="22">Verification successful</strong></h1>
</div>

</td>
</tr>
</tbody>
</table>

<!--[if (!mso)&(!IE)]><!-->
</div>
<!--<![endif]-->
</div>
</div>
<!--[if (mso)|(IE)]></td><![endif]-->
<!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
</div>
</div>
</div>





<div class="u-row-container" style="padding: 0px;background-color: transparent">
<div class="u-row" style="margin: 0 auto;min-width: 320px;max-width: 530px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #ffffff;">
<div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
<!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:530px;"><tr style="background-color: #ffffff;"><![endif]-->

<!--[if (mso)|(IE)]><td align="center" width="530" style="width: 530px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
<div class="u-col u-col-100" style="max-width: 320px;min-width: 530px;display: table-cell;vertical-align: top;">
<div style="height: 100%;width: 100% !important;">
<!--[if (!mso)&(!IE)]><!-->
<div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
<!--<![endif]-->

<table style="font-family:'Cabin',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
<tbody>
<tr>
<td style="overflow-wrap:break-word;word-break:break-word;padding:33px 55px;font-family:'Cabin',sans-serif;" align="left">

<div style="font-size: 14px; line-height: 160%; text-align: center; word-wrap: break-word;">
<p data-originalcomputedfontsize="16" data-removefontsize="true" style="line-height: 160%;">Congratulations, you have passed the review and are now a Verified customer. For an overview of your account benefits, please visit the Verification Centre. </p>
<div data-originalcomputedfontsize="16" data-removefontsize="true">Read our&nbsp;<a data-originalcomputedfontsize="16" data-removefontsize="true" rel="noopener">FAQs</a>&nbsp;if you are running into problems.</div>
<p data-originalcomputedfontsize="16" data-removefontsize="true" style="line-height: 160%;">To make your first crypto deposit, log-in to your account and navigate to the deposit page.</p>
<p style="line-height: 160%;">&nbsp;</p>
<p data-originalcomputedfontsize="16" data-removefontsize="true" style="line-height: 160%;">If you don't recognize this activity, please contact us immediately at</p>
<p style="line-height: 160%;"><a data-originalcomputedfontsize="16" data-removefontsize="true">https://www.volumeoptions/support</a></p>
<p style="line-height: 160%;">&nbsp;</p>
<p data-originalcomputedfontsize="16" data-removefontsize="true" style="line-height: 160%;">This is an automated message, please do not reply.</p>
<p style="line-height: 160%;"><span style="font-size: 22px; line-height: 35.2px;">&nbsp;</span></p>
</div>

</td>
</tr>
</tbody>
</table>

<!--[if (!mso)&(!IE)]><!-->
</div>
<!--<![endif]-->
</div>
</div>
<!--[if (mso)|(IE)]></td><![endif]-->
<!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
</div>
</div>
</div>





<div class="u-row-container" style="padding: 0px;background-color: transparent">
<div class="u-row" style="margin: 0 auto;min-width: 320px;max-width: 530px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #e5eaf5;">
<div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
<!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:530px;"><tr style="background-color: #e5eaf5;"><![endif]-->

<!--[if (mso)|(IE)]><td align="center" width="530" style="width: 530px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
<div class="u-col u-col-100" style="max-width: 320px;min-width: 530px;display: table-cell;vertical-align: top;">
<div style="height: 100%;width: 100% !important;">
<!--[if (!mso)&(!IE)]><!-->
<div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
<!--<![endif]-->

<table style="font-family:'Cabin',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
<tbody>
<tr>
<td style="overflow-wrap:break-word;word-break:break-word;padding:41px 55px 18px;font-family:'Cabin',sans-serif;" align="left">

<div style="font-size: 14px; color: #003399; line-height: 160%; text-align: center; word-wrap: break-word;">
<p data-removefontsize="true" data-originalcomputedfontsize="14" style="line-height: 160%;">© 2018 - 2024 Volumeoptions.com All Rights Reserved</p>
<p data-removefontsize="true" data-originalcomputedfontsize="14" style="line-height: 160%;">URL: <a data-removefontsize="true" data-originalcomputedfontsize="14">https://www.volumeoptions.com</a></p>
</div>

</td>
</tr>
</tbody>
</table>

<!--[if (!mso)&(!IE)]><!-->
</div>
<!--<![endif]-->
</div>
</div>
<!--[if (mso)|(IE)]></td><![endif]-->
<!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
</div>
</div>
</div>



<!--[if (mso)|(IE)]></td></tr></table><![endif]-->
</td>
</tr>
</tbody>
</table>
<!--[if mso]></div><![endif]-->
<!--[if IE]></div><![endif]-->
</body>

</html>
`,
    });
  }
  res.status(200).json({ msg: "sent email" });
}

// HTML Email Text
