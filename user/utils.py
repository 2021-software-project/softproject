import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from softproject.MBTI.settings import get_secret



class Util:
    @staticmethod
    def send_email(data):
        server = smtplib.SMTP('smtp.gmail.com', 587)
        server.starttls()
        server.login(get_secret("EMAIL_HOST_USER"), get_secret("EMAIL_HOST_PASSWORD"))

        mail_html = "<html><body>" + data['email_body']+"</body></html>"
        msg = MIMEMultipart('alternative')
        msg['Subject'] = data['email_subject']
        msg['From'] = get_secret("EMAIL_HOST_USER")
        msg['To'] = data['to_email']
        mail_html = MIMEText(mail_html, 'html')
        msg.attach(mail_html)

        server.sendmail(msg['From'], msg['To'].split(','), msg.as_string())
        server.quit()
