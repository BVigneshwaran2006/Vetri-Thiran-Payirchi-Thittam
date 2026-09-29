# Verification

Test by impersonating the **EEE User** and progressively assigning roles,
then comparing behavior against Admin.

## Read ACL only (role: bb1)
- User with **bb1** can view **only EEE branch** records.
- User without the role cannot view any records.
- Admin can view **all records**, regardless of branch.

## + Create ACL (roles: bb1, bb2)
- User with **bb1 & bb2** can view only EEE branch records **and** sees the
  **New** button to create records.

## + Write ACL (roles: bb1, bb2, bb3)
- User with **bb1, bb2 & bb3** can view, create, **and edit** EEE branch
  records.

## + Delete ACL (roles: bb1, bb2, bb3, bb4)
- User with all four roles can view, create, edit, **and delete** EEE branch
  records.

## Sign-off checklist
- [ ] EEE User + role(s) sees expected records only
- [ ] User without matching role sees no records
- [ ] Admin always sees all records regardless of branch
- [ ] New/Edit/Delete controls appear only once the matching role is granted
