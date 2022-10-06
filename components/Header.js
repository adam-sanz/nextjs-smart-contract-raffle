// import React, { useEffect } from "react"
// import { useMoralis } from "react-moralis"

// const Header = () => {
//     const { enableWeb3, account, isWeb3Enabled, Moralis, deactivateWeb3, isWeb3EnableLoading } =
//         useMoralis()

//     useEffect(() => {
//         if (
//             !isWeb3Enabled &&
//             typeof window !== "undefined" &&
//             window.localStorage.getItem("connected")
//         ) {
//             enableWeb3()
//         }
//     }, [isWeb3Enabled])

//     useEffect(() => {
//         Moralis.onAccountChanged((account) => {
//             console.log(`Account changed to ${account}`)
//             if (account == null) {
//                 window.localStorage.removeItem("connected")
//                 deactivateWeb3()
//                 console.log("Null Account found")
//             }
//         })
//     }, [])

//     const connect = async () => {
//         await enableWeb3()
//         window.localStorage.setItem("connected", "injected")
//     }

//     return (
//         <>
//             {account ? (
//                 <>
//                     Connected to {account.slice(0, 4)}...{account.slice(account.length - 4)}
//                 </>
//             ) : (
//                 <button onClick={connect} disabled={isWeb3EnableLoading}>
//                     Connect
//                 </button>
//             )}
//         </>
//     )
// }

// export default Header

import { ConnectButton } from "web3uikit"

export default function Header() {
    return (
        <nav className="p-5 border-b-2 flex flex-row">
            <h1 className="font-bold text-3xl"> Decentralized Lottery</h1>
            <div className="ml-auto py-2 px-4">
                <ConnectButton moralisAuth={false} />
            </div>
        </nav>
    )
}
