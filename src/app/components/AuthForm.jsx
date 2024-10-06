'use client'

import {Auth} from '@supabase/auth-ui-react';
import {createClientComponentClient} from '@supabase/auth-helpers-nextjs'

export default function AuthForm(){
    const supabase = createClientComponentClient();
    return (
        <Auth
        supabaseClient={supabase}
        view="magic_link"
        showLinks={false}
        providers={[]}
        redirectTo='https://lab8-xv3r.vercel.app/auth/callback'
        appearance={{
            them:'dark',
            button:{
                className: 'bg-white-0400 text-gray-900 hover:bg-gray-600'
            },
            input:{
                className: 'bg-gray-700 border-gray-600 text-white'
            }
        }}
        />
    )
}