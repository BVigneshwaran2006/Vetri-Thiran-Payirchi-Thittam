/*
 ACL: Delete
 Table: u_institution_details
 Type: record
 Operation: delete
 Active: true
 Requires role: bb4
 Data condition: none

 Role-only enforcement — no script required. Included here as the
 script-controlled equivalent for reference/consistency.

 Setup path: System Security > Access Control (ACL) > New
*/

(function () {
	if (gs.hasRole('admin')) {
		return true;
	}

	if (gs.hasRole('bb4')) {
		return true;
	}

	return false;
})();
