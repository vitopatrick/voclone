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
      subject: "[Volume Options] New Sign in",
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

table, td { color: #ecf0f1; } #u_body a { color: #f1c40f; text-decoration: underline; } @media (max-width: 480px) { #u_content_heading_1 .v-font-size { font-size: 81px !important; } #u_content_heading_2 .v-container-padding-padding { padding: 10px !important; } #u_content_heading_2 .v-font-size { font-size: 36px !important; } #u_content_heading_2 .v-line-height { line-height: 110% !important; } #u_content_text_1 .v-font-size { font-size: 16px !important; } #u_content_text_2 .v-container-padding-padding { padding: 10px !important; } #u_content_text_6 .v-container-padding-padding { padding: 40px 10px 10px !important; } }
</style>

<!--[if !mso]><!--><link href="https://fonts.googleapis.com/css?family=Open+Sans:400,700" rel="stylesheet" type="text/css"><link href="https://fonts.googleapis.com/css2?family=Arvo&display=swap" rel="stylesheet" type="text/css"><!--<![endif]-->

</head>

<body class="clean-body u_body" style="margin: 0;padding: 0;-webkit-text-size-adjust: 100%;background-color: #ecf0f1;color: #ecf0f1">
<!--[if IE]><div class="ie-container"><![endif]-->
<!--[if mso]><div class="mso-container"><![endif]-->
<table id="u_body" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;min-width: 320px;Margin: 0 auto;background-color: #ecf0f1;width:100%" cellpadding="0" cellspacing="0">
<tbody>
<tr style="vertical-align: top">
<td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
<!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="background-color: #ecf0f1;"><![endif]-->
<!--[if gte mso 9]>
<table cellpadding="0" cellspacing="0" border="0" style="margin: 0 auto;min-width: 320px;max-width: 100px;">
<tr>
<td background="https://cdn.templates.unlayer.com/assets/1705035997416-bg.png" valign="top" width="100%">
<v:rect xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false" style="width: 100px;">
<v:fill type="frame" src="https://cdn.templates.unlayer.com/assets/1705035997416-bg.png" /><v:textbox style="mso-fit-shape-to-text:true" inset="0,0,0,0">
<![endif]-->
<div class="u-row-container" style="padding: 0px;background-image: url('https://cdn.templates.unlayer.com/assets/1705035997416-bg.png');background-repeat: no-repeat;background-position: center top;background-color: transparent">
<div class="u-row" style="margin: 0 auto;min-width: 320px;max-width: 100px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
<div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
<!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-image: url('https://cdn.templates.unlayer.com/assets/1705035997416-bg.png');background-repeat: no-repeat;background-position: center top;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:100px;"><tr style="background-color: transparent;"><![endif]-->
<!--[if (mso)|(IE)]><td align="center" width="100" style="width: 100px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
<div class="u-col u-col-100" style="max-width: 320px;min-width: 100px;display: table-cell;vertical-align: top;">
<div style="height: 100%;width: 100% !important;">
<!--[if (!mso)&(!IE)]><!--><div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;"><!--<![endif]-->
<table id="u_content_heading_1" style="font-family:'Open Sans',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
<tbody>
<tr>
<td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:200px 10px 5px;font-family:'Open Sans',sans-serif;" align="left">
<!--[if mso]><table width="100%"><tr><td><![endif]-->
<h1 class="v-line-height v-font-size" style="margin: 0px; color: #f1c40f; line-height: 80%; text-align: center; word-wrap: break-word; font-family: Arvo; font-size: 38px; font-weight: 400;"><span style="line-height: 30.4px;"><span style="line-height: 30.4px;"><span style="line-height: 30.4px;"><span style="line-height: 30.4px;"><span style="line-height: 30.4px;"><span style="line-height: 30.4px;"><span style="line-height: 30.4px;"><span style="line-height: 30.4px;"><span style="line-height: 30.4px;"><span style="line-height: 30.4px;"><span style="line-height: 30.4px;"><span style="line-height: 30.4px;"><span style="line-height: 30.4px;"><span style="line-height: 30.4px;"><span style="line-height: 30.4px;"><span style="line-height: 30.4px;"><strong>welcome</strong></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></h1>
<!--[if mso]></td></tr></table><![endif]-->

</td>
</tr>
</tbody>
</table>

<table id="u_content_heading_2" style="font-family:'Open Sans',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
<tbody>
<tr>
<td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:'Open Sans',sans-serif;" align="left">
<!--[if mso]><table width="100%"><tr><td><![endif]-->
<h1 class="v-line-height v-font-size" style="margin: 0px; color: #f1c40f; line-height: 100%; text-align: center; word-wrap: break-word; font-family: Arvo; font-size: 19px; font-weight: 400;"><span style="line-height: 19px;"><span style="line-height: 19px;"><span style="line-height: 19px;"><span style="line-height: 19px;"><span style="line-height: 19px;"><span style="line-height: 19px;"><span style="line-height: 19px;"><span style="line-height: 19px;"><span style="line-height: 19px;"><span style="line-height: 19px;"><span style="line-height: 19px;"><span style="line-height: 19px;"><span style="line-height: 19px;"><span style="line-height: 19px;"><span style="line-height: 19px;"><span style="line-height: 19px;">To volume Options </span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></h1>
<!--[if mso]></td></tr></table><![endif]-->

</td>
</tr>
</tbody>
</table>

<table style="font-family:'Open Sans',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
<tbody>
<tr>
<td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:'Open Sans',sans-serif;" align="left">
<table height="0px" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;border-top: 1px solid #BBBBBB;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
<tbody>
<tr style="vertical-align: top">
<td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;font-size: 0px;line-height: 0px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
<span>&#160;</span>
</td>
</tr>
</tbody>
</table>

</td>
</tr>
</tbody>
</table>

<table id="u_content_text_1" style="font-family:'Open Sans',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
<tbody>
<tr>
<td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:'Open Sans',sans-serif;" align="left">
<div class="v-line-height v-font-size" style="font-family: 'Open Sans',sans-serif; font-size: 16px; color: #ecf0f1; line-height: 110%; text-align: center; word-wrap: break-word;">
<p style="line-height: 110%;"><span data-metadata="&lt;!--(figmeta)eyJmaWxlS2V5IjoicmkxdVlheFJKck1qakhmdVV3UllhSSIsInBhc3RlSUQiOjEwMDg4MzA4MjMsImRhdGFUeXBlIjoic2NlbmUifQo=(/figmeta)--&gt;" style="line-height: 17.6px;"></span><strong data-removefontsize="true" data-originalcomputedfontsize="14">T H A N K S   F O R   S I G N I N G   U P !</strong></p>
</div>

</td>
</tr>
</tbody>
</table>

<table id="u_content_text_2" style="font-family:'Open Sans',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
<tbody>
<tr>
<td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:10px 50px 25px;font-family:'Open Sans',sans-serif;" align="left">
<div class="v-line-height v-font-size" style="font-family: inherit; font-size: 18px; color: #95a5a6; line-height: 140%; text-align: center; word-wrap: break-word;">
<div>
<p style="line-height: 140%;"><span data-removefontsize="true" data-originalcomputedfontsize="14" style="line-height: 25.2px;">Welcome to Volume Options </span></p>
<p style="line-height: 140%;"><span data-removefontsize="true" data-originalcomputedfontsize="14" style="line-height: 25.2px;">You're almost ready to get started. <br />please verify your identity on the Web-exchange so as to start trading volume of coins professionally. <br /><br /></span></p>
<p style="line-height: 140%;"> </p>
<p style="line-height: 140%;" data-removefontsize="true" data-originalcomputedfontsize="14">Risk warning: Cryptocurrency trading is subject to high market risk.Volume Options will make the best efforts to choose high-quality coins, but will not be responsible for your trading losses. Please trade with caution.</p>
<p style="line-height: 140%;"><span data-removefontsize="true" data-originalcomputedfontsize="14" style="line-height: 25.2px;"><br /><br /></span></p>
</div>
<p style="line-height: 140%;"> </p>
</div>

</td>
</tr>
</tbody>
</table>

<table style="font-family:'Open Sans',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
<tbody>
<tr>
<td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:'Open Sans',sans-serif;" align="left">
<table height="0px" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;border-top: 1px solid #BBBBBB;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
<tbody>
<tr style="vertical-align: top">
<td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;font-size: 0px;line-height: 0px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
<span>&#160;</span>
</td>
</tr>
</tbody>
</table>

</td>
</tr>
</tbody>
</table>

<table id="u_content_text_6" style="font-family:'Open Sans',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
<tbody>
<tr>
<td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:40px 80px 10px;font-family:'Open Sans',sans-serif;" align="left">
<div class="v-line-height v-font-size" style="font-size: 14px; line-height: 160%; text-align: center; word-wrap: break-word;">
<p style="font-size: 14px; line-height: 160%;">Kindly note: Please be aware of phishing sites and always make sure you are visiting the official <a rel="noopener" href="https://www.volumeoptions.com/" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://www.volumeoptions.com/&amp;source=gmail&amp;ust=1705763608248000&amp;usg=AOvVaw1rsevFWugoBKQVRtyYJXFG" data-removefontsize="true" data-originalcomputedfontsize="14">https://www.Volumeoptions.com</a>  website when entering sensitive data.</p>
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
<!--[if gte mso 9]>
</v:textbox></v:rect>
</td>
</tr>
</table>
<![endif]-->


<div class="u-row-container" style="padding: 0px;background-color: transparent">
<div class="u-row" style="margin: 0 auto;min-width: 320px;max-width: 100px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
<div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
<!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:100px;"><tr style="background-color: transparent;"><![endif]-->
<!--[if (mso)|(IE)]><td align="center" width="100" style="width: 100px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
<div class="u-col u-col-100" style="max-width: 320px;min-width: 100px;display: table-cell;vertical-align: top;">
<div style="height: 100%;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
<!--[if (!mso)&(!IE)]><!--><div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;"><!--<![endif]-->
<table style="font-family:'Open Sans',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
<tbody>
<tr>
<td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:'Open Sans',sans-serif;" align="left">
<div class="v-line-height v-font-size" style="font-size: 14px; line-height: 140%; text-align: center; word-wrap: break-word;">
<p style="line-height: 140%;">© 2023 Volumeoption, All Rights Reserved. </p>
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


<!--[if (mso)|(IE)]></td></tr></table><![endif]-->
</td>
</tr>
</tbody>
</table>
<!--[if mso]></div><![endif]-->
<!--[if IE]></div><![endif]-->
</body>

</html>`,
    });
  }
  res.status(200).json({ msg: "sent email" });
}
