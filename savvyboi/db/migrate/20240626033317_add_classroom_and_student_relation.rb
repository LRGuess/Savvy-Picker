class AddClassroomAndStudentRelation < ActiveRecord::Migration[7.1]
  def change
    change_table :students do |t|
      t.references :classroom, null: false, foreign_key: true
    end
  end
end
