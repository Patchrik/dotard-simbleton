export const BusinessHTML = (BusinessObject) => {
	return `
        <section class="business">
            <h2 class="business_name">${BusinessObject.companyName}</h2>
            <div class="business-full-address"> ${BusinessObject.addressFullStreet} 
                ${BusinessObject.addressCity}
                ${BusinessObject.addressStateCode}
                ${BusinessObject.addressZipCode}
            </div>
        </section>
    `;
};
