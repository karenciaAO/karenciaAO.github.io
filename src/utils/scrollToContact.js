export const scrollToContact = () => {
    const contactSection = document.getElementById('connect');
    if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
    }
};
