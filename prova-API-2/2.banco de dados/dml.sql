use  pet_db;


--inserir novo pet 
insert into tb_pet(id_pet, nm_pet)
	value(1,'seila');



-- consultar todos os pets 
select id_pet      id,
       nm_pet      nome
  from tb_pet;