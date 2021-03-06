import React, { Component } from 'react'
import Contact from '../components/Contact'
import Header from '../components/Header'
import Home from '../components/Home'
import styles from './Main.css'

class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tabs: ['Home', 'Contact'],
      activeTab: 'Home'
    }
  }

  render() {
    const { tabs, activeTab } = this.state

    return (
      <div className={styles.body}>
        <header role="banner">
          <Header
            tabs={tabs}
            activeTab={activeTab}
            onTabClick={this.onTabClick}
          />
        </header>
        <main role="main">
          {activeTab === 'Home' && <Home />}
          {activeTab === 'Contact' && <Contact onContact={this.onContact} />}
        </main>
        <footer role="contentinfo" className={styles.footer}>
          Here is footer content
        </footer>
      </div>
    )
  }

  onTabClick = e => {
    this.setState({
      activeTab: e.target.innerText
    })
  }

  onContact = (e, state) => {
    e.preventDefault()
    console.log(state)
  }
}

Main.displayName = 'Main Container'

export default Main
