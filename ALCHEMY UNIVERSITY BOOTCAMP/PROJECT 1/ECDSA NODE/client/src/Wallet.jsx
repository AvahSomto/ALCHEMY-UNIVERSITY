import server from "./server";
import * as secp from "ethereum-cryptography/secp256k1";
import { toHex } from "ethereum-cryptography/utils";
import { keccak256 } from "ethereum-cryptography/keccak";

function Wallet({
    address,
    setAddress,
    balance,
    setBalance,
    privateKey,
    setPrivateKey,
}) {
    async function onChange(evt) {
        // generate public key and address from private key
        const _privateKey = evt.target.value;
        setPrivateKey(_privateKey);

        const publicKey = secp.getPublicKey(_privateKey);
        const publicKeyHash = toHex(keccak256(publicKey));
        // console.log("Public key Hash wallet", publicKeyHash);
        const address = `0x${publicKeyHash.slice(-20)}`; // 20 bytes address
        setAddress(address);
        if (address) {
            const {
                data: { balance },
            } = await server.get(`balance/${address}`);
            setBalance(balance);
        } else {
            setBalance(0);
        }
    }

    return (
        <div className="container wallet">
            <h1>E-Wallet</h1>
            <p className="note-body">
    <span className="note-title">IMPORTANT: </span> Your private key should be securely stored within your wallet and only used for signing messages when necessary.
    <br />
    This demonstration aims to illustrate the functionality of public key cryptography and its role in securing transactions.
    <br />
    It is crucial to safeguard your private key to ensure the security of your digital assets.
</p>

            <label>
                Private Key
                <input
                    placeholder="Enter your private key"
                    value={privateKey}
                    onChange={onChange}
                ></input>
            </label>
            <div>Address: {address}</div>{" "}
            <div className="balance">Balance: {balance}</div>
        </div>
    );
}

export default Wallet;
