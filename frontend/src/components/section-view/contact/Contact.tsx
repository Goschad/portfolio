export default function Contact() {
    return (
        <div className="section contact">
            <h1 className="section__title">Contact</h1>
            <div className="contact__items">
                <a href="mailto:bouazamarwen.pro@gmail.com" className="contact__item">
                    <span className="contact__label">Email</span>
                    <span className="contact__value">Lorem ipsum dolor sit amet</span>
                </a>
                <a href="tel:0668647168" className="contact__item">
                    <span className="contact__label">Phone</span>
                    <span className="contact__value">Lorem ipsum dolor sit amet</span>
                </a>
                <a href="https://github.com/Goschad" target="_blank" className="contact__item">
                    <span className="contact__label">GitHub</span>
                    <span className="contact__value">github.com/Goschad</span>
                </a>
            </div>
        </div>
    )
}