import Image from 'next/image'

import React, { FunctionComponent } from "react"

interface HighLightProps {
    name:string,
    description:string,
    image:string
}

const HighLight:FunctionComponent<HighLightProps>=({name,description,image})=>{
    return (
        <div className="">
            <Image
              src={`${image}`}
              alt="highlight-bg"
              className=""
              width={100}
              height={50}
              priority
            />
            <p>{name}</p>
            <p>{description}</p>
            <div>
                <div>
                    <Image src={"/assets/icon/arrow_forward.svg"} alt='icon' />
                </div>
            </div>
        </div>
    )
}

export default HighLight