import React from 'react'

type Props = {
    params: { workspaceId: string }
    children: React.ReactNode
}

const Layout = ({ params: { workspaceId }, children }: Props) => {
    return (
        <div>
            <div className="flex h-screen w-screen">

                <div className="w-full pt-28 p-6 overflow-y-scroll overflow-x-hidden">
                    <div className="mt-4">{children}</div>
                </div>
            </div>
        </div>
    )
}

export default Layout