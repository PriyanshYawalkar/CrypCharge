import * as Random from "expo-random";
import { Keypair } from "diamante-js-sdk";
import { PUBLIC_KEY, PRIVET_KEY } from '../@.env'
import React, { useState } from 'react';

const generateRandomKeypair = () => {
    const randomBytes = Random.getRandomBytes(32);
    return Keypair.fromRawEd25519Seed(Buffer.from(randomBytes));
};



const DiamantePay: React.FC = () => {
    const [publicKey, setPublicKey] = useState<string | null>(null);
    const [privateKey, setPrivateKey] = useState<string | null>(null);

    const handleGenerateKeypair = () => {
        const keypair = generateRandomKeypair();
        setPublicKey(keypair.publicKey().toString());
        setPrivateKey(keypair.secret());
    };

    return (
        <div>
            <h1>Diamante Pay</h1>
            <button onClick={handleGenerateKeypair}>Generate Keypair</button>
            {publicKey && (
                <div>
                    <p><strong>Public Key:</strong> {publicKey}</p>
                    <p><strong>Private Key:</strong> {privateKey}</p>
                </div>
            )}
        </div>
    );
};

export default DiamantePay;
