import Image from 'next/image'
import React from 'react'

type Props = {
    activeWorkspaceId: string
}

const Sidebar = ({ activeWorkspaceId }: Props) => {
    return (
        <div className="bg-[#111111] flex-none relative p-4 h-full w-[250px] flex fex-col gap-4 items-center overflow-hidden">
            <div className="bg-[#111111] p-4 gap-2 justify-center items-center mb-4 absolute top-0 left-0 right-0">
                <Image src="/opal-logo.svg" alt="logo" width={40} height={40} />
                <p className="text-2xl">Stream Line</p>
            </div>
        </div>
    )
}

export default Sidebar