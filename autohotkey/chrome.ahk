;针对Chrome浏览器改键 F1替换F12
#IfWinActive, ahk_class Chrome_WidgetWin_1
F1::send {F12}
F2::send {F12}

;back
Alt & z::SendInput, {Alt Down}{Left}
#IfWinActive