import React from 'react'
import OverView from './OverView'

export default function MainContent() {
  return (
    <>
    <main class="main-content">
        {/* <!-- Top Navigation --> */}
        <header class="top-nav">
            <input type="text" placeholder="Search here..." class="search-box" />
            {/* <div class="top-icons">
                <i class="fas fa-bell"></i>
                <i class="fas fa-comment-alt"></i>
                <div class="profile-pic"></div>
            </div> */}
        </header>

        {/* <!-- Overview Section --> */}
        <OverView />

        {/* <!-- Analytics Section --> */}
        <section class="analytics">
            <h3>Analytics</h3>
            <div class="chart-placeholder">[Chart will be here]</div>
        </section>
    </main>
    </>
  )
}
