---
title: Draft specs for Despacito
sidebar:
  order: 2
---

This document outlines the potential Internet Drafts that will define Despacito.

We're currently considering breaking up the protocol into the following drafts:

- **Despacito Core**. The Layer 7-agnostic Protocol.
- Protocol bindings:
  - **Despacito, HTTP binding**.
- Credentials:
  - **Despacito, OAuth2 access token**.
  - **Despacito, Proof of Work**.
  - **Despacito, Proof of Space(time)**.
  - **Despacito, Proof of Stake**. Offending clients will lose their stake or _collateral_.
    - Blockchain-backed deposit (stablecoin like USDC).
    - Deposit with an escrow service.
    - Domain names (VeraId).
    - Reputation with a third-party service that carries out KYC verifications and ensures the same person can't create multiple accounts. Maybe use homomorphic encryption to ensure privacy. (Proof of personhood)
  - **Despacito, App Integrity assertion**.
  - **Despacito, CAPTCHA solution validation**.
