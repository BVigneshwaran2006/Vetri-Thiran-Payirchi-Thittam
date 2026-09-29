# Script-Controlled ACL Micro Project

## Description
This lab demonstrates how to implement a script-controlled Access Control List (ACL)
in ServiceNow to restrict users from viewing records unless they meet specific
conditions. Only users belonging to the **EEE branch** may view records where the
**Branch** field is set to **EEE**, while administrators retain full access.

**Estimated time:** 3 hrs

## Milestones
1. **Creation of Users and Roles** — `config/users_and_roles.md`
2. **Tables Creation and Data Population** — `config/table_schema.md`
3. **Access Control Lists (ACL) Setup** — `scripts/acl_read.js`, `acl_create.js`, `acl_write.js`, `acl_delete.js`
4. **Verification** — `docs/verification.md`

## Project structure

```
acl-project/
├── README.md                     This file
├── config/
│   ├── users_and_roles.md        Test user + custom roles (bb1-bb4) to create
│   └── table_schema.md           u_institution_details table field definitions
├── scripts/
│   ├── acl_read.js               Read ACL script (role bb1)
│   ├── acl_create.js             Create ACL script (role bb2)
│   ├── acl_write.js              Write ACL script (role bb3)
│   └── acl_delete.js             Delete ACL script (role bb4)
└── docs/
    └── verification.md           Expected behavior per role, for testing/sign-off
```

## How to use this in ServiceNow

ServiceNow customizations of this kind (tables, roles, ACLs) live in the instance
database, not as flat files, so there is no source file you "deploy" by copying —
each script below is entered into the **Script** field of its matching ACL record.
This zip packages the scripts and configuration as reference/version-controlled
source so you can:

1. Recreate the users, roles, and table by following `config/users_and_roles.md`
   and `config/table_schema.md`.
2. Copy each file in `scripts/` into the **Script** field of the matching ACL
   (System Security → Access Control (ACL) → New) as described in that file's header.
3. Verify behavior against `docs/verification.md`.

For a production rollout, capture all of the above in an **Update Set**
(System Update Sets → Local Update Sets) before making changes, so the whole
configuration can be exported/imported as a single XML file across instances.

## Outcome
By completing this project, you gain a working understanding of how
script-controlled READ, WRITE, CREATE, and DELETE ACLs enforce record-level
security, how user roles and record field values are evaluated together to
make access decisions, and how ACLs protect sensitive data from unauthorized
viewing, modification, creation, and deletion across forms, lists, and Service
Portal interfaces.
