/*
 ACL: Read
 Table: u_institution_details
 Type: record
 Operation: read
 Active: true
 Advanced: true
 Requires role: bb1
 Data condition: Branch is EEE

 Setup path: System Security > Access Control (ACL) > New
 (Elevate to the "security_admin" role first.)
*/

(function () {
	// Allow admin users full access
	if (gs.hasRole('admin')) {
		return true;
	}

	// Allow only EEE branch users to see EEE records
	if (gs.hasRole('bb1')) {
		return true;
	}

	// Deny access for all others
	return false;
})();
