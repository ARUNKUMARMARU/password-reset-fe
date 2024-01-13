import instance from "./instance";

const authService = {
    signup: async (user) => {
        try {
            console.log('Registering user...');
            const res = await instance.authInstance.post('/signup', user,{headers:{"Content-Type":"application/json"}});

            console.log(res.data);

            if (res.data) {
                console.log('User registered successfully');
                return res.data;
            } else {
                console.log('Error registering user');
                return res.data;
            }
        } catch (error) {
            console.log('Error registering user');
            return error.response.data;
        }
    },
    sendEmail:async(getEmail)=>{
        try{
            const payload = {email:getEmail}
            console.log(payload)
            console.log("Sending mail...")
            const res = await instance.authInstance.get('/requestlink',payload,{headers:{"Content-Type":"application/json"}})

            console.log(req.data);

            if (res.data) {  
                console.log('Link sent successfully');
                return res.data;
            } else {
                console.log('Try Error sending link');
                return res.data;
            }

        }catch(error) {
            console.log('catch Error sending link');
            return error.response.data;
        }
    }
}

export default authService;