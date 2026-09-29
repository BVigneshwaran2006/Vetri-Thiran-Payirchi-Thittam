# Users and Roles

## Test user
Navigate to **User Administration → Users → New**

| Field       | Value                      |
|-------------|----------------------------|
| User ID     | EEE User                   |
| First name  | EEE                        |
| Last name   | User                       |
| Email       | eeeuser@gmail.com          |

Save the record.

## Custom roles
Navigate to **User Administration → Roles → New** and create each of the
following (Name + a brief Description of its purpose):

- `bb1` — grants Read access to EEE-branch records
- `bb2` — grants Create access
- `bb3` — grants Write (edit) access
- `bb4` — grants Delete access

Assign **all four roles** to the **EEE User** created above so it can be used
to test each ACL as it's added.
