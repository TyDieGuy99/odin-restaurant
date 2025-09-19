export function getAboutPage(container) {

    const infoContainer = createAndAppend('div', null, container, 'infoContainer');


    const contact = createAndAppend('div', null, infoContainer, 'contact');
    createAndAppend('h3', 'Contact Us!', contact);
    const contactInfo = createAndAppend('div', null, contact, 'contactInfo');
    createAndAppend('div', 'Call us:', contactInfo);
    createAndAppend('div', '55-5555-5555', contactInfo);
    createAndAppend('div', 'Email us:', contactInfo);
    createAndAppend('div', 'definitelyARealEmail@notFakeEmail.com', contactInfo);

    createAndAppend('h3', 'Check us out on social media!', contact);
    const socialMedia = createAndAppend('div', null, contact, 'socialMedia');
    createAndAppend('div', 'link to instagram', socialMedia);
    createAndAppend('div', 'link to tiktok', socialMedia);
    createAndAppend('div', 'link to facebook', socialMedia);


    const location = createAndAppend('div', null, infoContainer, 'location');
    createAndAppend('h3', 'Our Location', location);


    const hours = createAndAppend('div', null, infoContainer, 'hours');
    createAndAppend('h3', 'Hours', hours);
}

function createAndAppend(tag, content, parent, id = null) {
    const element = document.createElement(tag);
    if (content) element.textContent = content;
    if (id) element.id = id;
    if (parent) parent.appendChild(element);
    return element;
}