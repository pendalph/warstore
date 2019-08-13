class AccountServices {
    
    public APP_ID: string = 'ecf06dbd17904533ae6c1ecb672df4bc'; // app keys - https://developers.wargaming.net/applications/
    public API_URL: string = 'https://api.worldoftanks.ru/wot/account/list/?application_id';   // base link for receiving account information

    async getAccountData(name: string){
        const result = await fetch(`${this.API_URL}=${this.APP_ID}&search=${name}`);

        if (!result.ok) {
            throw new Error('Failed to get data.' + result.status);
        };

        return await result.json();
    };
};

export default AccountServices;