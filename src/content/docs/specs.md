---
title: Draft specs for Despacito
sidebar:
  order: 2
---

We're currently considering breaking up the protocol into the following drafts:

- **Despacito: Core**. The Layer 7-agnostic protocol.
- Layer 7 bindings:
  - **Despacito: HTTP binding**.
- Credentials:
  - [Client authentication](https://ddos.report/tactics/authentication/):
    - **Despacito: OAuth2 access token**. Validates JWTs, and extracts the `sub` claim.
    - **Despacito: Server authentication with [VeraId](https://veraid.net/)**.
    - Reputation with a third-party service that carries out KYC verifications and ensures the same person can't create multiple accounts. Maybe use homomorphic encryption to ensure privacy. \*
  - [Cryptographic challenges](https://ddos.report/tactics/crypto-challenges/):
    - **Despacito: [Proof of Work](https://ddos.report/tactics/crypto-challenges/#proof-of-work)**.
    - **Despacito: Proof of Space**.
  - [Humanity verification](https://ddos.report/tactics/humanity-verification/):
    - **Despacito: CAPTCHA**.
    - **Despacito: Remote device attestation**.
    - **Despacito: User presence test**.
  - **Despacito: [App Integrity](https://ddos.report/tactics/app-attestation/)**.
  - **Despacito: Proof of Collateral**. Offending clients will lose their _collateral_.
    - Blockchain-backed deposit (stablecoin like USDC). \*
    - Deposit with an escrow service. \*

\* We're listing these as potential options for illustrative purposes,
but we won't spend any meaningful time on them in the near future.

## Open questions

If you know the answer to any of these questions,
please let us know on [our forum](https://github.com/relaycorp/despacito-website/discussions).

- What percentage of bots (in botnets) are compromised IoT devices? Presumably, this will vary over time and by country.
- What are the different types of IoT devices that are used in DDoS attacks, and their respective share? Presumably, this will vary over time and by country.

Knowing the answers to the questions above would help us understand how to configure these challenges.
For example, we know that IoT devices are resource-constrained,
so we could leverage a Proof of Space protocol,
requiring an amount of storage that is feasible for a smartphone but not for an IoT device.
