import Check from '@/public/content-marketing/checklist.svg'
import Image from 'next/image'

const list = [
    {
    title:'Expert Digital Strategists',
    desc: ' Our experienced team of digital marketing strategists has a proven track record of delivering results for our clients.'
},
   
    {
    title:'Content Analysis & Measurement',
    desc: 'After delivering & distributing the content, we make sure to analyse the performance and measure the efficient ways.'
},
{
    title:'Content Creation & Distribution',
    desc: 'Our experienced team of digital marketing strategists has a proven track record of delivering results for our clients.'
},
    {
    title:'Free Consultation',
    desc: 'We deliver 100% free consultation that comes with every package. Our customer service and digital strategists are ready for you.'
},
]

export default function GetList() {
return <div className="flex flex-col my-10">
    <p className="text-mirch-pink font-montserrat font-bold text-[32px] leading-[42px] underline decoration-dashed decoration-[#FFA6DE] underline-offset-[10px] mb-10 ">
        What You Will Get
    </p>

    <div className="grid md:grid-cols-2">
    {list.map((item, index) =>(
        <div key={index} className="flex flex-col py-2">
            <div className="inline-flex gap-x-4 items-center justify-start">
            <Image src={Check} alt=''/>
            <h1 className="text-mirch-pink font-bold text-[16px] md:text-[24px] md:leading-[34px] font-montserrat">{item.title}</h1>
            </div>
            <p className="text-[#7B7B7B] text-[16px] leading-[26px]">{item.desc}</p>
        </div>
    ))

    }
    </div>
</div>
}