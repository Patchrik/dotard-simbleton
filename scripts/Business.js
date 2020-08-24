export const BusinessHTML = (BusinessObject) => {
	return `
        <section class="business">
            <h3 class="business_name">${BusinessObject.companyName}</h3>
            <div class="business-full-address"> <p>${BusinessObject.addressFullStreet} <br>
                ${BusinessObject.addressCity}
                ${BusinessObject.addressStateCode}
                ${BusinessObject.addressZipCode}</p>
            </div>
        </section>
    `;
};
