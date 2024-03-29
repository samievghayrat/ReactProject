export default function CoreConcept({ image, title, description }) {
    return (
        <li>
            <img src={image} alt={title} style={{ maxWidth: "100%", height: "auto" }} />
            <h3>{title}</h3>
            <p>{description}</p>
        </li>
    );
}
