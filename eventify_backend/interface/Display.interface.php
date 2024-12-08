<?php

interface DisplayInterface{
	public function EventDisplay();
	public function ProfileDisplay();
	
	public function AudienceReport(); /* sinalpak kasama ng fetch users */
	public function FetchUsers();
}