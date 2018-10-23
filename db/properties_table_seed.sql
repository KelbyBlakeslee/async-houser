create table properties (
    id serial primary key,
    prop_name text,
    prop_desc text,
    address text,
    city text,
    state varchar(6),
    zip integer,
    loan_amt integer,
    desired_rent integer,
    user_id integer
)