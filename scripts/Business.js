export const BusinessHTML = (BusinessObject) => {
	return `
        <section class="business">
            <h2 class="business_name">${BusinessObject.companyName}</h2>
            <div class="business-full-address"> <p>${BusinessObject.addressFullStreet} <br>
                ${BusinessObject.addressCity}
                ${BusinessObject.addressStateCode}
                ${BusinessObject.addressZipCode}</p>
            </div>
        </section>
    `;
};
