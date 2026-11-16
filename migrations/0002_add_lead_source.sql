-- Where the lead came from (?ref= on the link they followed: gbp, facebook, outreach, ...)
ALTER TABLE leads ADD COLUMN source TEXT;
