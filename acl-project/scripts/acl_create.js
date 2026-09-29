/*
 ACL: Create
 Table: u_institution_details
 Type: record
 Operation: create
 Active: true
 Requires role: bb2
 Data condition: none

 This ACL is enforced purely by the "Requires role" list — no script is
 needed. This file documents the equivalent script for consistency/reference
 if you want an explicit script-controlled version instead of role-only.

 Setup path: System Security > Access Control (ACL) > New
*/

(function () {
	// Allow admin users full access
	if (gs.hasRole('admin')) {
		return true;
	}

	// Allow users with the Create role
	if (gs.hasRole('bb2')) {
		return true;
	}

	return false;
})();
