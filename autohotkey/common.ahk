!i::Send {PgUp}
!m::Send {PgDn}

!;:: Send {Home}
!':: Send {End}

!h:: Send {left} 
!l:: Send {right} 
!k:: Send {up} 
!j:: Send {down} 

!d::Send {Backspace} 
!f::Send {Delete}

!w::WinMinimize, A  ;最小化活动窗口。

Alt & CapsLock::SendInput, {Enter}

Alt & 4::SendInput, {Alt Down}{F4}


;将大写锁定键改为Enter
$CapsLock::Enter

;将LAlt+Capslock改为Capslock锁定
LAlt & Capslock::SetCapsLockState, % GetKeyState("CapsLock", "T") ? "Off" : "On"
