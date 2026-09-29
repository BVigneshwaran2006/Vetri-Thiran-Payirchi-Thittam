# Table: u_institution_details

Navigate to **System Definition → Tables → New**.

| Setting     | Value                      |
|-------------|----------------------------|
| Label       | Institution Details        |
| Name        | u_institution_details      |
| Extends     | (none)                     |

## Fields

| Field              | Type            | Notes                     |
|---------------------|-----------------|----------------------------|
| Student Roll Number  | Auto Number     |                            |
| Student Name        | Reference (User)|                            |
| Faculty Name        | Reference (User)|                            |
| Branch              | Choice          | Options: ECE, EEE, CSE     |
| Email               | String          |                            |
| Phone Number        | String          |                            |
| Description         | Multi-line text |                            |

After saving, create several sample records covering all three Branch values
(ECE, EEE, CSE) so the ACL's data condition has something to filter.
