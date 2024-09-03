'use client'
import drinkData from '@/app/drinkdata.json';
import Tag from './tag';
import { useFormState } from 'react-dom';

export async function FormSubmit (prevState: any, formData: any) {
    const res = await fetch ('http://localhost:3000/api', {
        method: 'POST',
        body: formData
    })

    const data = await res.json()
    const value = formData.get("Parties");
    console.log(`${value}` + " Hello");
    // console.log("hello")
    return data
}

export default function TagForm() {
    const [state, FormAction] = useFormState(FormSubmit, '')

    return (
        <form action={FormAction} id="tagForm">
            <div className="flex flex-col space-y-2">
                <label htmlFor="stars" className="font-bold">Rating</label>
                <div id="stars"></div>
                <label htmlFor="tags" className="font-bold">Tags</label>
                <div id="tags" className="place-items-start flex flex-wrap">  
                    {
                        drinkData.tags.map((tag)=>{
                        return Tag(tag)})
                    }
                </div>
            </div>

        </form>
    );
}