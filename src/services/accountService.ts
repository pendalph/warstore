class AccountServices {
    
    public APP_ID: string = '3e5721b263115b6c375cce4e144c33ed'; // app keys - https://developers.wargaming.net/applications/
    public API_URL: string = 'https://api.worldoftanks.ru/wot/account/info/?application_id';   // base link for receiving account information

    async getAccountData(id: number){
        const result = await fetch(`${this.API_URL}=${this.APP_ID}&account_id=${id}`);

        if (!result.ok) {
            throw new Error('Failed to get data.' + result.status);
        };

        return await result.json();
    };
};

export default AccountServices;