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

export const agentsHTML = (agentObj) => {
	return `
        <h2 class="agent_name">${agentObj.fullName}</h2>
        <h3 class="agent_company">${agentObj.company}</h3>
        <h3 class="agent_phone">${agentObj.phoneNumber}</h3>
    `;
};
