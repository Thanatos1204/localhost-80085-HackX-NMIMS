import Navbar from "../components/ui/navbar/navbar"
import Sidebar from "../components/ui/sidebar/sidebar"
import styles from "../components/ui/dashboard.module.css"
import Footer from "../components/ui/footer/footer"

const Layout = ({children}) => {
  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <Sidebar/>
      </div>
      <div className={styles.content}>
        <Navbar/>
        {children}
        <Footer/>
      </div>
    </div>
  )
}

export default Layout