import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import './Header.css';
import HeaderOption from'./HeaderOption';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import { useDispatch } from 'react-redux'; 
import { auth } from './firebase';
import { logout } from './features/userSlice';

function Header() {
  const dispatch = useDispatch();

  const logoutOfApp = () => {
  dispatch(logout());
  auth.signOut();
}

  return (

    <div className='header'>
      <div className='header__left'>
      <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAAeFBMVEUAd7f///8AdLYAZ7AAarHd6vNdnsvG4e+ev9vM4e5DjMG92es0gLvK3OuWv9sadramxN4lhb8AcLT3+vzr9Pllo80Rfrvj7/aSuthKlceAstRip9BrrtVKnsstjsO10uZ3rNKqz+XU6vSHrNKRtNWKwd4+mMlbk8RysCA9AAAGZUlEQVR4nO2da3eqOhCGw1SwQKUmgXCpBaSX/f//4Qmtu6e1QMZojokn71rtJ4Q8TgyZYWYggVRcA3FaUMcjB5F/YcSuPZpzxaLwEyZvrj2US6jJP2A66vgkGwW0G2HywvlJNooVuYTpyA0YRpqGdAHhTzdhGGmaJ0443IRhpGmAk/Tu2qO4lO5SsruRWSbn2Y4838gsk/PsmbS3A9MSce0xXE43hPI/Fhx07XGcL2AMBE2SRAjC3F7N2Z2oX7N9Gg/rbp+9tLBy1j6wSu7XZfAlPnSNcNQ6jGZ5cCQ+7Fz88YBofqF8aF0z13Ag6SZRRu2EYzR1OssSBJlTDjdE8QJLEHSJOzSsXmYJ+NYZ2wDdLLMEQV45EkEAyFQsQVAWjsDUXA0TpE5MNIClhexf9S7AsB3GMEEwPNhPA0z563fHNKwOkTCp/TCrCjfL5M3G+iVgDN1iZX3oDVrFzf/7PLM9KPr5KAqn0HqYftqLmYSx3YlmL9jfv9zS2L4/Y694mNz25ewkGNs9TvaC/82UlrPI1axUUxxk/2pWD2iY2HYYoDgHYFRmOwxhWzSM/Zk3Y5IATsPjtceqFAjsfubN9n2m1GqLvNO4EDsDgVuc3649UJRYgzFN6YJhRtNgXJrq2sNECiL1guZMtBlAOdHiyBGWMRCQLdOExbWHeIJAVEszbSgenTEMGW3Tzy/Q69ax55oA0Xoahe9t98kmBLSZ8AZ4Wjhmlk8Bkzg/FgIuUYRzz5oPAhB1FpZlnvM8L8tNkxAnzfIpAGBA66hviqgVzFWjfBMwxlYSxH0SLy8vyyTXla+8SYdzJw+Jn4JKJUki/wshPuAufynyOKeZ72/2+KkPjBxJXTRv+3gI83GfkZfDer2v+qilc1fQVtJn22k10cPE8bSoZo7fVsXxsw8gD3WzXZdTXlMZd/cFvehWo9jMOjS87H7FMqHdT45s8gOMJM0mXHKYyrSK6KVwoFgON6VHNPC4Xzz+e6YNkD/VoAwy8LDrL5PcCnTGl/m6VPbTp2G1amyvh4HJrXg14KKMeRfdXcA46njz5mdwhr2pRnaocANSpPhHc+GWnm+cVaW8zM/ozJ3Ckn/nGRO/s4sXFUdn79RX92ZgGN2fhDJeqD/3tmMIhrX4B1lfyqszQw5mYE7JZPkmnp1nGyMwWnb5oGnsgzn99/JX+VlpekZgFBHfJZXnRLZNwMyUSeC0OSOxxQBMic/8mlKmv1EzAHOm8vcbgglS7fXZQhj+rrtLsxAmiG8JJtdtxmAjTLDR3D9bCVPWeqaxEobf3xCMbsWOnTClXqMcO2GkY3NDMHr9mOyECcI/lsLkQ9p16RqfdxzoOmmGYXjcRHVNhaC0Lt6QIcERJtOJbRiFydOCjv0fPsSYoE2Mxel0avZMwoS9+PlMCYDeI73QjU6Sm0GYzUQ3AYAe54eGOpnU5mDSZOrGt5hD9eOqp7OYg4lnAuEADebjeW8RDJ9tDwkEEyHkOlmupmCaeZeEUcwJthrLmSGYdPGaGNPorM1mYPJ+adfLWsQp1hqNzMzApIrWXYhzxPXJLGZguGJnhVnQBo0bjRGYUHH7xuS5hxoRdCMwqqRbaNUn0XkcYAJGNcsIEep691yjDYkJGLVnhWiqov5G/hsYdWwFEDXilsBslWF8QNS7auxnTMC8Kr9TQLQisAOGv6iDXoji3er0ckoTjwHV/dSBqvME7LAMotE9PKg73tgBgwgUexiXYTTCzR7Gw3gYD+NhPIyH8TAexsN4GA/jYTyMh/EwHsbDeBgP42E8jIfxMB7Gw3gYD+NhPIyH8TAexsN4GA/jYTwMCkaZ++0QDOtVZaBHRYarvWoUnbr4FR7UxU3V6Rnn0KrSpY8KwNmTahRbTC2/sp2TTmEDYa/LJw2PspThUUGPquIBZZa2VhE9iO18W8yAh/2vD7yHC9/qxAemVSxVbXN+3PESS0OKfRpPq3urfxcpQJ11M8fHaVbj+kaBPMvcVeP1vtIonzucV4zdbadEyXRJ79zxCcVXvrP5s8jrarIQ8tV4eEKnHn/CIJbOos/idS05+EKMOQmiuzLYJ2jJ8+3APJPd6tqDuJRWO2L9q33RuksJt/0FsliBROHWv0IaKbbj5IxmjlZp7L5BFI0TnNH4ommi3cnNLn28mVXC5I37Ew3I2KBXwgSljhNqlz5fYPAP1lqXNpp5WG8AAAAASUVORK5CYII=' alt='' />

      <div className='header__search'>
        {/* SearchIcon? */}
         < SearchIcon />
      <input placeholder='Search' type='text' />
      </div>
      </div> 
 
      <div className='header__right'>
        <HeaderOption Icon={HomeIcon} title='Home' />
        <HeaderOption Icon={SupervisorAccountIcon} title='My Network' />
        <HeaderOption Icon={BusinessCenterIcon} title='Jobs'/>
        <HeaderOption Icon={ChatIcon} title='Messaging'/>
        <HeaderOption Icon={NotificationsActiveIcon} title='Notifications'/>
        <HeaderOption 
        avatar={true}
         title='me'
        onClick={logoutOfApp}
         />
      </div>
    </div>
  )
}

export default Header
