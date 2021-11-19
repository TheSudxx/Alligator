from selenium import webdriver
import pyautogui
import time
import pyperclip
from tkinter import *
import tkinter.font as font

token = 'OTEwNjA2NjQ5MDU4NzkxNTE0.YZcw3Q.Dv5hmsV1TuMhNPhYC81uA_PJXyY'

def tok():

    def trans():
        action()

    lbl1=Label(text='Enter the token of the account you want to connect to', font=("italic", 10))
    lbl1.place(x=15, y=14)
    token_enter=Entry(bd=2, show="""●""", width=30)
    token_enter.place(x=80, y=50)
    tb = font.Font(size=10)
    b1=Button(text='Validate', command=trans)
    b1.place(x=100, y=100)
    b1['font'] = tb
    b2=Button(text='Cancel', command=tok)
    b2.place(x=190, y=100)
    b2['font'] = tb

    def action():
        global token
        token = token_enter.get()
        window.destroy()

window=Tk()
mywin=tok()
window.title("Auto-Login by Astraa")
window.geometry('350x150')
window.mainloop()

driver = webdriver.Chrome('chromedriver.exe')
driver.get('https://discord.com/login')
js = 'function login(token) {setInterval(() => {document.body.appendChild(document.createElement `iframe`).contentWindow.localStorage.token = `"${token}"`}, 50);setTimeout(() => {location.reload();}, 500);}'
time.sleep(3)
driver.execute_script(js + f'login("{token}")')
