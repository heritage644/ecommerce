import flower from "../assets/plant 1.svg"
export default function Dashboard() {
  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-item active">
          <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
            <circle cx="12" cy="7" r="4"/>
          </svg>
          <span className="flex items-center justify-center gap-3"> <h3 className="flex  items-center justify-center ">Fa<img src={flower} alt="flower.bg" /> m<strong className="text-orange-400 border-b border-green-400 ">Nest</strong>
            </h3>Account </span>
        </div>

        <div className="sidebar-item">
          <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M16 3h5v5M4 20L21 3M21 16v5h-5M15 15l6 6M4 4l5 5"/>
          </svg>
          <span>Orders</span>
        </div>

        <div className="sidebar-item">
          <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
            <polyline points="22,6 12,13 2,6"/>
          </svg>
          <span>Inbox</span>
        </div>

        <div className="sidebar-item">
          <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
            <polyline points="14,2 14,8 20,8"/>
          </svg>
          <span>Pending Reviews</span>
        </div>

        <div className="sidebar-item">
          <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
          </svg>
          <span>Voucher</span>
        </div>

        <div className="sidebar-item">
          <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
          </svg>
          <span>Wishlist</span>
        </div>

        <div className="sidebar-item">
          <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
          </svg>
          <span>Followed Sellers</span>
        </div>

        <div className="sidebar-item">
          <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
            <circle cx="12" cy="12" r="3"/>
          </svg>
          <span>Recently Viewed</span>
        </div>

        <div className="sidebar-divider"></div>

        <div className="sidebar-link">Account Management</div>
        <div className="sidebar-link">Payment Settings</div>
        <div className="sidebar-link">Address Book</div>
        <div className="sidebar-link">Newsletter Preferences</div>
        <div className="sidebar-link">Cookie Preferences</div>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <h1 className="page-title">Account Overview</h1>

        <div className="content-grid">
          {/* Account Details */}
          <div className="card">
            <h2 className="card-title">ACCOUNT DETAILS</h2>
            <div className="card-content">
              <p className="account-name">Okey Chukwu</p>
              <p className="account-email">okjohn644@gmail.com</p>
            </div>
          </div>

          {/* Address Book */}
          <div className="card">
            <div className="card-header">
              <h2 className="card-title">ADDRESS BOOK</h2>
              <button className="edit-btn">{""}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
                  <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
                </svg>
              </button>
            </div>
            <div className="card-content">
              <p className="address-label">Your default shipping address:</p>
              <p className="address-name">Okey Chukwu</p>
              <p className="address-line">17,Adamson barracks ojo</p>
              <p className="address-line">FESTAC (7th Avenue), Lagos</p>
              <p className="address-phone">+234 8169315045 / +234 9058480421</p>
            </div>
          </div>

          {/* Jumia Store Credit */}
          <div className="card">
            <h2 className="card-title">JUMIA STORE CREDIT</h2>
            <div className="card-content">
              <div className="credit-info">
                <span className="bg-green-500 w-7 text-center">₦</span>
                <span className="flex  items-center gap-3"> <h3 className="flex  items-center justify-center ">Fa<img src={flower} alt="flower.bg" /> m<strong className="text-orange-400 border-b border-green-400 ">Nest</strong>
            </h3> credit balance: </span>
                <span className="credit-amount">₦ 0</span>
              </div>
            </div>
          </div>

          {/* Newsletter Preferences */}
          <div className="card">
            <h2 className="card-title">NEWSLETTER PREFERENCES</h2>
            <div className="card-content">
              <p className="newsletter-text">
                Manage your email communications to stay updated with the latest news and offers.
              </p>
              <a href="#" className="newsletter-link">Edit Newsletter preferences</a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}