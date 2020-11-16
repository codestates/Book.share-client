import React, { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faBlogger } from '@fortawesome/free-brands-svg-icons'
import "./Footer.css"

export default function Footer() {
  const [HaTogleState, setHaTogleState] = useState(false)
  const [JinTogleState, setJinTogleState] = useState(false)
  const [SuTogleState, setSuTogleState] = useState(false)
  const [ChiTogleState, setChiTogleState] = useState(false)

  const handleHaClick = e => {
    e.preventDefault()
    if (HaTogleState === false) {
      setHaTogleState(true)
    } else {
      setHaTogleState(false)
    }
  }

  const handleJinClick = e => {
    e.preventDefault()
    if (JinTogleState === false) {
      setJinTogleState(true)
    } else {
      setJinTogleState(false)
    }
  }

  const handleSuClick = e => {
    e.preventDefault()
    if (SuTogleState === false) {
      setSuTogleState(true)
    } else {
      setSuTogleState(false) 
    }
  }

  const handleChiClick = e => {
    e.preventDefault()
    if (ChiTogleState === false) {
      setChiTogleState(true)
    } else {
      setChiTogleState(false)
    }
  }
  
  return (
    <section className="footer-container">
      <div className="inner-foot">
        <div className="content-bookshare">
          <p className="title-footer">BookShare</p>
          <p className="desc-footer">북쉐어는 F4에서
            <em>❤</em>
            을 담아 만듭니다.
            <br></br>
              © F4 Corp.
          </p>
        </div>
        <div className="info-maker">
          <div className="click-makerInfo">
            <span className="name-maker" onClick={handleHaClick}>▼ 김하석이 궁금할 땐</span>
            {HaTogleState ?
              <ul className="info-list">
                <p className="link-txt">Role: Front-end</p>
                <li>
                  <a href="https://hsssss-90.tistory.com/" className="link-txt">
                    <FontAwesomeIcon icon={faBlogger} />
                  &nbsp;
                  blog
                </a>
                </li>
                <li>
                  <a href="https://github.com/haseok2118" className="link-txt">
                    <FontAwesomeIcon icon={faGithub} />
                  &nbsp;
                  Github
                </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/haseok_90/?hl=ko" className="link-txt">
                    <FontAwesomeIcon icon={faInstagram} />
                  &nbsp;
                  Instagram
                </a>
                </li>
              </ul>
              : null}
          </div>
          <div className="click-makerInfo">
            <span className="name-maker" onClick={handleJinClick}>▼ 박진수가 궁금할 땐</span>
            {JinTogleState ?
              <ul className="info-list">
                <p className="link-txt">Role: Back-end</p>
                <li></li>
                <li>
                <a href="https://github.com/pjsw5476" className="link-txt">
                    <FontAwesomeIcon icon={faGithub} />
                  &nbsp;
                  Github
                </a>
                </li>
                <li></li>
              </ul>
              : null}
          </div>
          <div className="click-makerInfo">
            <span className="name-maker" onClick={handleSuClick}>▼ 조수현이 궁금할 땐</span>
            {SuTogleState ?
              <ul className="info-list">
                <p className="link-txt">Role: Back-end</p>
                <li>
                  <a href="https://htbp.tistory.com/" className="link-txt">
                    <FontAwesomeIcon icon={faBlogger} />
                  &nbsp;
                  blog
                </a>
                </li>
                <li>
                <a href="https://github.com/ZAELROOT" className="link-txt">
                    <FontAwesomeIcon icon={faGithub} />
                  &nbsp;
                  Github
                </a>
                </li>
                <li></li>
              </ul>
              : null}
          </div>
          <div className="click-makerInfo">
            <span className="name-maker" onClick={handleChiClick}>▼ 최치원이 궁금할 땐</span>
            {ChiTogleState ?
              <ul className="info-list">
                <p className="link-txt">Role: Front-end</p>
                <li>
                  <a href=" https://chiione.tistory.com/" className="link-txt">
                    <FontAwesomeIcon icon={faBlogger} />
                  &nbsp;
                  blog
                </a>
                </li>
                <li>
                  <a href="https://github.com/chiione" className="link-txt">
                    <FontAwesomeIcon icon={faGithub} />
                  &nbsp;
                  Github
                </a>
                </li>
                <li></li>
              </ul>
              : null}
          </div>
        </div>
      </div>
    </section>
  )
}

