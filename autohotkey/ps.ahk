;PS
#IfWinActive, ahk_class Photoshop
;PS导出JPG文件
!e::
send, {lctrl down}{lalt down}{lshift down}{' down}{' up}{lshift up}{lalt up}{lctrl up}
return

;PS导出PNG文件
!r::
send, {lctrl down}{lshift down}{' down}{' up}{lshift up}{lctrl up}
return

;Enter
Ctrl & Right::SendInput, {Enter}

;F12
F1::F7

#IfWinActive