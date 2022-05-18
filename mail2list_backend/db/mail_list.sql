create database mail2list;

\c mail2list;

BEGIN;


CREATE SEQUENCE sq_mail_id START 1;
CREATE TABLE mail_list
(
    id integer NOT NULL DEFAULT nextval('sq_mail_id'),
    name varchar(20)  NOT NULL,
    email  character varying,
    archive  character varying,
    description  character varying
);

CREATE TABLE subscribe_mail_list
(
	id integer NOT NULL DEFAULT nextval('sq_mail_id'),
	user_email character varying,
	username character varying,
	name character varying,
	email character varying
);

CREATE  TABLE "archive_mail_list" (
	id integer NOT NULL DEFAULT nextval('sq_mail_id'),
	name character varying,
	from_email character varying,
	create_time character varying,
	subject character varying,
	body character varying,
	filename character varying,
	message_id character varying,
	in_reply_to character varying,
	reference character varying
);



INSERT INTO mail_list("id", "name", "email", "archive", "description") VALUES (1, 'A-Tune', 'zhudong@openeuler.sh', 'archive', 'Mail list for openeEuler A-Tune SIG,which is used for the discussions about tuning.');
INSERT INTO mail_list("id", "name", "email", "archive", "description") VALUES (2, 'rust', 'zhudong@openeuler.sh', 'archive', 'Mail list for openeEuler A-Tune SIG,which is used for the discussions about tuning.');