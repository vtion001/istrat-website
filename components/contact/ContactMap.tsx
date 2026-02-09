/**
 * Contact Map Component
 * Google Maps embed for office location
 */

export default function ContactMap() {
    return (
        <section id="section3" className="max-w-7xl mx-auto px-6 md:px-8 py-8">
            <div className="w-full h-96 border border-white/5 rounded-[48px] grayscale hover:grayscale-0 transition-all duration-500 overflow-hidden">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3860.200569762696!2d121.0566!3d14.6395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b796aecb8763%3A0x5a5c5c5c5c5c5c5c!2s161%20Kamias%20Rd%2C%20Diliman%2C%20Quezon%20City%2C%201101%20Metro%20Manila!5e0!3m2!1sen!2sph!4v1600000000000!5m2!1sen!2sph"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="iStrat Comms - Quezon City Office"
                />
            </div>
        </section>
    )
}
