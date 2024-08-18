import { TiWorld } from "react-icons/ti";
import { MdOutlineWatchLater, MdDashboard, MdSecurity, MdSupportAgent } from "react-icons/md"
const WhyHR = () =>{
    return(
        <section className="mb-12 mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1: Large Customer Base */}
          <div className="text-center flex flex-col justify-center items-center p-4">
            <h3 className="text-[5rem] text-button font-semibold mb-2">
              <TiWorld />
            </h3>
            <h3 className="text-xl font-semibold mb-2">Large Customer Base</h3>
            <p>Access millions of potential customers worldwide.</p>
          </div>

          {/* Card 2: Seller Dashboard */}
          <div className="text-center flex flex-col justify-center items-center p-4">
            <h3 className="text-[5rem] text-button font-semibold mb-2">
              <MdDashboard />
            </h3>
            <h3 className="text-xl font-semibold mb-2">Seller Dashboard</h3>
            <p>Manage your listings with ease using our intuitive dashboard.</p>
          </div>

          {/* Card 3: Secure Payments */}
          <div className="text-center flex flex-col justify-center items-center p-4">
            <h3 className="text-[5rem] text-button font-semibold mb-2">
              <MdSecurity />
            </h3>
            <h3 className="text-xl font-semibold mb-2">Secure Payments</h3>
            <p>Receive and make payments securely through our trusted platform.</p>
          </div>

          {/* Card 4: 24/7 Support */}
          <div className="text-center flex flex-col justify-center items-center p-4">
            <h3 className="text-[5rem] text-button font-semibold mb-2">
              <MdSupportAgent />
            </h3>
            <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
            <p>Our support team is available around the clock to assist you.</p>
          </div>
        </div>
      </section>
    )
}

export default WhyHR