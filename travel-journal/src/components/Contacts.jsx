export default function Contact(props) {
    return (
        <article className="contact-card">
            <img
                src={props.img}
                alt="Photo of" 
            />
            <h3>{props.name}</h3>
            <div className="info-group">
                <img
                    src="src/assets/phone-icon.png"
                    alt="phone icon"
                />
                <p>{props.phone}</p>
            </div>
            <div className="info-group">
                <img
                    src="src/assets/mail-icon.png"
                    alt="mail icon"
                />
                <p>{props.mail}</p>
            </div>
        </article>
    )
}